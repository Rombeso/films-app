import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	fontSize?: 'small' | 'medium' | 'large'
	children: ReactNode
}