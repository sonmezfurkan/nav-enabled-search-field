# nav-enabled-search-field
Up and down arrow keys navigation enabled custom SAPUI5 SearchField control

expanded metadata looks like this
```js
metadata: {
  properties: {
    "navIndex": {
      type: "int",
      defaultValue: null
    }
  }
}
```

action is determined according to the pressed keyboard button
```js
switch (event.keyCode) {
  case 38:
    window.console.log("up");
    newIndex = oldIndex - this.getNavIndex();
    if (!isNaN(newIndex) && newIndex > 0) {
      newTargetId = event.target.id.replace(oldIndex.toString(), newIndex.toString());
      if ($('#' + newTargetId)) $('#' + newTargetId).focus();
    }
    break;
  case 40:
    window.console.log("down");
    newIndex = oldIndex + this.getNavIndex();
    if (!isNaN(newIndex) && newIndex > 0) {
      newTargetId = event.target.id.replace(oldIndex.toString(), newIndex.toString());
      if ($('#' + newTargetId)) $('#' + newTargetId).focus();
    }
    break;
  default:
};
```
