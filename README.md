# JavaScript's + operator type coercion unexpected behavior
This repository demonstrates unexpected behavior of JavaScript's + operator due to implicit type coercion.  The + operator's behavior with various data types may not be intuitive to developers unfamiliar with JavaScript's loose typing system.

## Problem
JavaScript's + operator performs implicit type coercion.  This means that when you add different data types, JavaScript automatically converts them to a common type before performing the addition. However, this coercion can lead to unexpected results, especially when dealing with non-numeric types such as booleans, strings, null, undefined and objects. 

## Solution
The best approach is to explicitly check the data types and perform type conversions before the addition is performed.
Alternatively using methods like `parseInt()` and `Number()` could solve the problem but is less elegant in the long run.  A more robust solution is to explicitly handle the different data types and perform the appropriate conversion before addition.