# Specificity

## Cascade
With even a moderately complicated style sheet, it is likely that two or more rules will target the same
element. CSS handles such conflicts through a process known as the cascade.

## Specificity
[abcd]
- a 
    + style is an inline style, a equals 1
- b equals the total number of 
    + ID selectors
- c equals the number of 
    + class
    + pseudo-class
    + attribute selectors
- d equals the number of 
    + type selectors 
    + pseudo-element selectors.

### Universal
1. The universal selector (*) always has a specificity of 0

### Inheritance
Inheritance is very useful, as it lets you avoid having to add the same style to every descendant of an element.

1. inherited styles have a null specificity,  not even zero.
2. universal selector, which has a specificity of zero, will override inherited properties. 

### Important
1. Declarations that are marked !important do not have a special specificity value, but are instead considered separately from non-important declarations. 
2. Thus, in any case where an important and a non-important declaration conflict, the important declaration always wins.
    

## 应用
1. link的 lvhfa