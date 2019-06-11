```xml
<custom:NavSearchField
  navIndex="20"
  value="{detail>OrderedProd}"
  placeholder=""
  search="onSearchProd"
  showRefreshButton="false"
  showSearchButton="true"
  enableSuggestions="true"
  suggest="handleSuggestProduct"
  suggestionItems="{path: 'productModel>/productSearchHelpSet', templateShareable: false}"
  enabled="{= ${detail>IeOrderedProd} === 'X' ? true : false}">
  <custom:suggestionItems>
    <m:SuggestionItem key="{productModel>ProductId}" text="{productModel>ProductId}" description="{productModel>ProductTxt}"/>
  </custom:suggestionItems>
</custom:NavSearchField>
```
