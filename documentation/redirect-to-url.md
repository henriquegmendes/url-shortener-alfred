# Redirect to URL

### Used open the previously specified URL.

**URL** : `/link/:id`

**Method** : `GET`

**Auth required** : NO

**Data constraints (params)**

```json
{
    "id": "[redirect url id inside short url]",
}
```

**Data example**

```json
{
    "id": "sZc1ulcNV",
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirected Url</title>
</head>
<body>
  REDIRECTED URL'S HTML
</body>
</html>
```

## Error Response

**Condition** : If 'id' param format is invalid, If id related link already expired OR If the id related link is not found in DB.

**Code** : `200 OK`

**Content** :

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Link Expired</title>
</head>
<body>
  <h1>Link Excluído ou Expirado</h1>
</body>
</html>
```