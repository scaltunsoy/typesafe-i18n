// This types were auto-generated. Any manual changes will be overwritten.
/* eslint-disable */

import type { LocalizedString } from 'typesafe-i18n'

export type BaseLocale = 'en'

export type Locales =
	| 'en'

export type Translation = {
	/**
	 * {name} {name} {name}
	 * @param {unknown} name
	 */
	'SAME_KEYED_PARAM': RequiredParams3<'name', 'name', 'name'>
}

export type TranslationFunctions = {
	/**
	 * {name} {name} {name}
	 */
	'SAME_KEYED_PARAM': (arg: { name: unknown }) => LocalizedString
}

export type Formatters = {}


type Param<P extends string> = `{${P}}`

type Params3<P1 extends string, P2 extends string, P3 extends string> =
	`${string}${Param<P1>}${string}${Param<P2>}${string}${Param<P3>}${string}`

type RequiredParams3<P1 extends string, P2 extends string, P3 extends string> =
	| Params3<P1, P2, P3>
	| Params3<P1, P3, P2>
	| Params3<P2, P1, P3>
	| Params3<P2, P3, P1>
	| Params3<P3, P1, P2>
	| Params3<P3, P2, P1>
