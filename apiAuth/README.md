# Api User

### Endpoints

| Method | Path            | Data              | Description              | Requires authorization | Cache | Services | External Services |
| :----- | :-------------- | ----------------- | :----------------------- | :--------------------- | :---- | :------- | :---------------- |
| `POST` | `api/user`      | `{dni,name,role}` | Create user for Firebase | `No`                   | `No`  | Firebase | Cloud Firestore   |
| `GET`  | `api/user{dni}` | N/A               | Get user for Firebase    | `No`                   | `No`  | Firebase | Cloud Firestore   |

**\*Nomenclatura:** {Service} - {Method}

Daniel Galvan ©
