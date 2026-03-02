export const SITE_TITLE = 'AI Work Station';
export const SITE_DESCRIPTION = 'AIツールとガジェットで仕事を10倍快適にする情報メディア';

export const CATEGORIES = {
	'ai-tools': { name: 'AIツール', description: 'ChatGPT・Claude・Gemini等のAIツールレビュー・比較・使い方' },
	'desk-environment': { name: 'デスク環境', description: 'モニター・キーボード・チェア等のガジェットレビュー' },
	'ai-x-desk': { name: 'AI×デスク', description: 'AIを使いこなすための最強デスク環境構築術' },
	'work-hack': { name: '仕事術', description: 'AI活用術・在宅ワーク効率化テクニック' },
	'desk-tour': { name: 'デスクツアー', description: 'AI時代の作業環境を公開・紹介' },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;
