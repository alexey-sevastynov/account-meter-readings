export interface UiComponentMetadata<TProps> {
    id: string;
    name: string;
    componentPath: string;
    props: TProps;
}

export function createUiMetadata<TProps>(metadata: UiComponentMetadata<TProps>) {
    return {
        ...metadata,
        componentAliasPath: metadata.componentPath.replace(/^src\//, "@/"),
    } as const;
}
