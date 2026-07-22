export type PublicationType =
  | 'article'
  | 'inproceedings'
  | 'conference'
  | 'book'
  | 'incollection'
  | 'phdthesis'
  | 'mastersthesis'
  | 'techreport'
  | 'misc'

export interface Author {
  firstName: string
  lastName: string
}

export interface Publication {
  key: string
  type: PublicationType
  title: string
  authors: Author[]
  year: string
  month?: string
  journal?: string
  booktitle?: string
  volume?: string
  number?: string
  pages?: string
  publisher?: string
  address?: string
  doi?: string
  url?: string
  abstract?: string
  keywords?: string[]
}
