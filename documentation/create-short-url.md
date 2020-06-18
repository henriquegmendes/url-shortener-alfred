# Create Short Link

### Used to generate a new short link.

**URL** : `/link/create`

**Method** : `POST`

**Auth required** : NO

**Data constraints (body request)**

```json
{
    "redirectUrl": "[redirect url with http(s) prefix]",
    "expirationDateMs": "[url expiration date in milliseconds]"
}
```

**Data example**

```json
{
    "redirectUrl": "https://www.google.com",
    "expirationDateMs": "1594090800000"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "shortUrl": "https://short-url-service/link/Lz2C23Dbt"
}
```

## Error Response

**Condition** : If 'redirectUrl' param format is invalid.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": [
    {
      "error": "Necessário enviar o campo na máscara http(s)://yoursite.com.br",
      "field": "redirectUrl"
    }
  ],
  "status": 400
}
```

### OR

**Condition** : If 'expirationDateMs' param format is invalid.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": [
    {
      "error": "Data de Expiração da URL em Milisegundos: campo deve estar em milisegundos",
      "field": "expirationDateMs"
    }
  ],
  "status": 400
}
```

### OR

**Condition** : If 'expirationDateMs' param format is invalid.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": [
    {
      "error": "Data de Expiração da URL em Milisegundos: campo deve estar em milisegundos",
      "field": "expirationDateMs"
    }
  ],
  "status": 400
}
```

### OR

**Condition** : If 'expirationDateMs' is lower than requests curent date/time.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": [
    {
      "error": "Data de Expiração da URL em Milisegundos deve ser maior ou igual a Wed Jun 17 2020 18:59:11 GMT-0300 (GMT-03:00)",
      "field": "expirationDateMs"
    }
  ],
  "status": 400
}
```

### OR

**Condition** : If params are not informed.

**Code** : `400 BAD REQUEST`

**Content** :

```json
{
  "message": [
    {
      "error": "Data de Expiração da URL em Milisegundos deve ser maior ou igual a Wed Jun 17 2020 18:59:11 GMT-0300 (GMT-03:00)",
      "field": "expirationDateMs"
    }
  ],
  "status": 400
}
```