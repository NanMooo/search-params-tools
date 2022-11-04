# SearchParmas Tools

提供了 SearchParams 便捷操作方法

## addSearchParams 添加 SearchParams Api

```javascript
addSearchParams('a=1&b=2', { c: 3, d: 4 })
// return 'a=1&b=2&c=3&d=4'
```

## delSearchParams 删除 SearchParams Api

```javascript
delSearchParams('a=1&b=2&c=3&d=4', ['c', 'd'])
// return 'a=1&b=2'
```

## getSearchParams 返回 SearchParams 的 JSON 对象的 Api

```javascript
delSearchParams('a=1&b=2')
// return {a: 1, b: 2}
```
