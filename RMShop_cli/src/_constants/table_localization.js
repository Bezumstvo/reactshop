import { ruLang as lang   } from "./ruLang.js";
export const table_localization = {
  body: {
      emptyDataSourceMessage :lang.TABLE_EMPTY_DATA_SOURCE_MESSAGE,
      addTooltip :lang.TABLE_ADD_TOOLTIP,
      deleteTooltip :lang.TABLE_DELETE_TOOLTIP,
      editTooltip :lang.TABLE_EDIT_TOOLTIP,
    filterRow: {
      filterTooltip :lang.TABLE_FILTER_ROW_TOOLTIP,
    },
    editRow: {
      deleteText :lang.TABLE_EDIT_ROW_DELETE_TEXT,
      cancelTooltip :lang.TABLE_EDIT_ROW_CANCEL_TOOLTIP,
      saveTooltip :lang.TABLE_EDIT_ROW_SAVE_TOOLTIP,
    }
  },
  grouping:{
    placeholder :lang.TABLE_PLACEHOLDER,
  },
  header: {
    actions :lang.TABLE_ACTIONS,
  },
  pagination:{
    labelDisplayedRows :lang.TABLE_LABEL_DISPLAYED_ROWS,
    labelRowsSelect :lang.TABLE_LABEL_ROWS_SELECT,
    labelRowsPerPage :lang.TABLE_LABELROWS_PER_PAGE,
    firstAriaLabel :lang.TABLE_FIRST_ARIA_LABEL,
    firstTooltip :lang.TABLE_FIRST_TOOLTIP,
    previousAriaLabel :lang.TABLE_PREVIOUS_AREA_LABEL,
    previousTooltip :lang.TABLE_PREVIOUS_TOOLTIP,
    nextAriaLabel :lang.TABLE_NEXT_ARIA_LABEL,
    nextTooltip :lang.TABLE_NEXT_TOOLTIP,
    lastAriaLabel :lang.TABLE_LAST_AREA_LABEL,
    lastTooltip :lang.TABLE_LAST_TOOLTIP,
  },
  toolbar:{
    addRemoveColumns :lang.TABLE_ADD_REMOVE_COLUMNS,
    nRowsSelected :lang.TABLE_ROWS_SELECTED,
    showColumnsTitle :lang.TABLE_SHOW_COLUMNS_TITLE,
    showColumnsAriaLabel :lang.TABLE_SHOW_COLUMNS_ARIA_LABEL,
    exportTitle :lang.TABLE_EXPORT_TITLE,
    exportAriaLabel :lang.TABLE_EXPORT_ARIA_LABEL,
    exportName :lang.TABLE_EXPORT_NAME,
    searchTooltip :lang.TABLE_SEARCH_TOOLTIP,
    searchPlaceholder :lang.TABLE_SEARCH_PLACEHOLDER,
  }
}
