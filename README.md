# Api User

## Configuration

### rename

.env.example | .env

### Endpoints

| Method | Path           | Data                                                          | Description              | Requires authorization | Cache | Services | External Services |
| :----- | :------------- | ------------------------------------------------------------- | :----------------------- | :--------------------- | :---- | :------- | :---------------- |
| `POST` | `api/user`     | `id*,email *,password*,name*,lastname*,photoURL,phoneNumber` | Create user for Firebase | `No`                   | `No`  | Firebase | Cloud Firestore   |
| `GET`  | `api/user{email}` | N/A                                                           | Get user for Firebase    | `No`                   | `No`  | Firebase | Cloud Firestore   |
| `PUT`  | `api/user{id}` | `{name,lastname,password,email} aun no esta`                              | Update user for Firebase | `No`                   | `No`  | Firebase | Cloud Firestore   |

## errors

### User
201 data exist

```
{
    "error": {
        "code": "auth/email-already-exists",
        "message": "The email address is already in use by another account."
        }
}
```

**\*Nomenclatura:** {Service} - {Method}

Daniel Galvan ©
