import type { ComponentProps } from 'react'

export interface ICommandPaletteContainerProps extends ComponentProps<'div'> {
    variant: 'sm' | 'md' | 'lg'
}

export interface ICommandPaletteItemProps extends ComponentProps<'li'> {
    searchTerm: string
}