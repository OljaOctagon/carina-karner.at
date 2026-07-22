import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { parse } from '@retorquere/bibtex-parser'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const bibPath = resolve(root, 'publications.bib')
const outPath = resolve(root, 'src/assets/data/publications.json')

if (!existsSync(bibPath)) {
  console.log('No publications.bib found — writing empty array.')
  writeFileSync(outPath, '[]')
  process.exit(0)
}

const bib = readFileSync(bibPath, 'utf-8')
const library = parse(bib)

function parseAuthors(raw) {
  if (!raw) return []

  let authorStr
  if (typeof raw === 'string') {
    authorStr = raw
  } else if (Array.isArray(raw)) {
    authorStr = raw
      .map((a) => {
        if (typeof a === 'string') return a
        const parts = []
        if (a.firstName) parts.push(a.firstName)
        if (a.von) parts.push(...(Array.isArray(a.von) ? a.von : [a.von]))
        if (a.lastName) parts.push(...(Array.isArray(a.lastName) ? a.lastName : [a.lastName]))
        if (a.jr) parts.push(...(Array.isArray(a.jr) ? a.jr : [a.jr]))
        return parts.join(' ')
      })
      .join(' and ')
  } else {
    authorStr = String(raw)
  }

  return authorStr.split(' and ').map((name) => {
    const parts = name.trim().split(',').map((s) => s.trim())
    if (parts.length >= 2) {
      return { firstName: parts[1], lastName: parts[0] }
    }
    const tokens = parts[0].split(' ')
    return {
      firstName: tokens.slice(0, -1).join(' '),
      lastName: tokens[tokens.length - 1] || '',
    }
  })
}

function getFieldValue(fields, key) {
  const val = fields[key]
  if (!val) return undefined
  if (typeof val === 'string') return val
  if (Array.isArray(val)) return val.join('')
  return String(val)
}

const publications = library.entries
  .map((entry) => ({
    key: entry.key,
    type: entry.type,
    title: getFieldValue(entry.fields, 'title') || '',
    authors: parseAuthors(entry.fields.author),
    year: getFieldValue(entry.fields, 'year') || '',
    month: getFieldValue(entry.fields, 'month'),
    journal: getFieldValue(entry.fields, 'journal'),
    booktitle: getFieldValue(entry.fields, 'booktitle'),
    volume: getFieldValue(entry.fields, 'volume'),
    number: getFieldValue(entry.fields, 'number'),
    pages: getFieldValue(entry.fields, 'pages'),
    publisher: getFieldValue(entry.fields, 'publisher'),
    address: getFieldValue(entry.fields, 'address'),
    doi: getFieldValue(entry.fields, 'doi'),
    url: getFieldValue(entry.fields, 'url'),
    abstract: getFieldValue(entry.fields, 'abstract'),
    keywords: getFieldValue(entry.fields, 'keywords')?.split(/\s*,\s*/),
  }))
  .sort((a, b) => Number(b.year) - Number(a.year))

mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, JSON.stringify(publications, null, 2))
console.log(`Parsed ${publications.length} publications from publications.bib → src/content/publications.json`)
