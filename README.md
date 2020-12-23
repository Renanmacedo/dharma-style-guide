## DHARMA STYLE GUIDE
 <p>Style Guide to create and customize plataform</p>

## Quickstart
Run this command in your terminal
```shell
npm install dharma-style-guide
```

## Use in project Angular
After run the install package, is possible use the style into your project angular.
 
## Configuration Theme
 ### In the file main scss or css, include the file theme

- First, import the file.
```scss
@import "~node_modules/dharma-style-guide/dharma-theme";
```
## Custom you theme
 You can be customize theme default the **dharma-style-guide**
 To customize the theme, is necessary the declaration the function.
 **Is possible only in file scss or sass**
 ```scss
  $orange: (
      50: orangeCustomColor
      ,100: orangeCustomColor
      ,200: orangeCustomColor
      ,300: orangeCustomColor
      ,400: orangeCustomColor
      ,500: orangeCustomColor 
      ,600: orangeCustomColor
      ,700: orangeCustomColor
      ,800: orangeCustomColor
      ,800: orangeCustomColor
      ,900: orangeCustomColor

  );
  $theme: dharma-ligth-theme($orange);
  @include dharma-core-theme($theme);
 ```
## Custom you typography

## Style Component
 - [Dharma Buttons](https://guides.github.com/features/mastering-markdown/)
 - [Dharma Form Field](https://guides.github.com/features/mastering-markdown/)
 - [Dharma Grid](https://guides.github.com/features/mastering-markdown/)
 - [Dharma Input Checkbox](https://guides.github.com/features/mastering-markdown/)
 - [Dharma Input Radio](https://guides.github.com/features/mastering-markdown/)
 - [Dharma Tables](https://guides.github.com/features/mastering-markdown/)
 - [Dharma Toggle Switch](https://guides.github.com/features/mastering-markdown/)
 - [Dharma Utils Classes](https://guides.github.com/features/mastering-markdown/)