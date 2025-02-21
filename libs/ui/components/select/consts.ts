export const SELECT_LABELS_MAP: Map<string, Record<string, string>> = new Map<string, Record<string, string>>()
    .set('ru', { placeholder: 'Не выбрано', emptySearchMessage: 'Ничего не найдено', selectAll: 'Выбрать все', removeAll: 'Снять все', clear: 'Очистить' })
    .set('en', { placeholder: 'Not selected', emptySearchMessage: 'Nothing found', selectAll: 'Select all', removeAll: 'Remove all', clear: 'Clear' })
    .set('fa', { placeholder: 'انتخاب نشده', emptySearchMessage: 'چیزی پیدا نشد', selectAll: 'انتخاب همه', removeAll: 'همه را حذف کنید', clear: 'پاک کردن' });

export const SELECT_SEARCH_LABELS_MAP: Map<string, Record<string, string>> = new Map<string, Record<string, string>>()
    .set('ru', { placeholder: 'Поиск...', clear: 'Очистить' })
    .set('en', { placeholder: 'Search...', clear: 'Clear' })
    .set('fa', { placeholder: 'جستجو کردن...', clear: 'پاک کردن' });
