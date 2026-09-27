<div align="center">
<img src="./doc/assets/img/img.png" alt="Index app" width="100%" />
<div align="right">
<img width="16" height="16" src="./doc/assets/icons/devops/png/aws.png" alt="AWS" />
<img width="16" height="16" src="./doc/assets/icons/aws/png/lambda.png" alt="Lambda" />
<img width="16" height="16" src="./doc/assets/icons/devops/png/git.png" alt="Git" />
<img width="16" height="16" src="./doc/assets/icons/aws/png/api-gateway.png" alt="API Gateway" />
<img width="16" height="16" src="./doc/assets/icons/aws/png/parameter-store.png" alt="Parameter Store" />
<img width="16" height="16" src="./doc/assets/icons/backend/javascript-typescript/png/nodejs.png" alt="Node.js" />
</div>
</div>

<br>

<br>

<div align="right">
  <a href="./README.md" title="Español">
    <img src="./doc/assets/translation/arg-flag.jpg" width="64" height="40" alt="Español" title="Español" />
  </a>
  <a href="./translation/README.en.md" title="Inglés">
    <img src="./doc/assets/translation/eeuu-flag.jpg" width="64" height="40" alt="Inglés" title="Inglés" />
  </a>
</div>

<br>

<div align="center">

# Lambda con Serverless y API Gateway ![(status-completed)](./doc/assets/icons/badges/status-completed.svg)

</div>

Una Lambda para publicar tu primera API en AWS. Reúne API Gateway y Node.js en un endpoint HTTP, declarado con Serverless y con el deploy preparado para GitHub Actions, para que pases del código a una URL que ya responde y puedas repetir ese camino cada vez que actualices el proyecto.

<div align="left">
<a href="https://www.youtube.com/playlist?list=PLCl11UFjHurBhSQCwGDw7uDd2yAu5tVsV" target="_blank" rel="noopener noreferrer" title="Playlist"><img src="./doc/assets/icons/detail-actions/playlist-pill.svg" alt="Playlist" width="100" height="30" border="0" /></a>
</div>

<br>

## Índice 📜

<details>
 <summary>Ver detalles</summary>

<div align="right">

`Última actualización: 27/09/26`

</div>

### Sección 1) Descripción, configuración y tecnologías.

* [1.0) Descripción.](#10-descripción-)
* [1.1) Ejecución del proyecto.](#11-ejecución-del-proyecto-)
* [1.2) Tecnologías.](#12-tecnologías-)

### Sección 2) Documentación y referencias.

* [2.0) Documentación y referencias.](#20-documentación-y-referencias-)

</details>

<br>

## Sección 1) Descripción, configuración y tecnologías.

### 1.0) Descripción [🔝](#índice-)

<details>
 <summary>Ver detalles</summary>

* El servicio está definido en `serverless.yml`: una función Lambda (`test`) con runtime Node.js 20, 128 MB de memoria, timeout de 10 segundos y región `us-east-2`. El provider declara 512 MB; la función usa 128 MB.
* API Gateway publica el recurso `GET /test` como HTTP API.
* El handler vive en `src/index.js`. Recibe el evento, lo deja en el log y responde `200` con `{ message: 'Lambda with Api Gateway!' }`.
* El deploy queda preparado en `.github/workflows/master.yml`. El workflow está comentado. Al activarlo, cada push a `master` instala Node.js 20 y publica el servicio con Serverless Framework.

</details>

### 1.1) Ejecución del proyecto [🔝](#índice-)

<details>
 <summary>Ver detalles</summary>

* Clonamos el repositorio y entramos a la carpeta.

```bash
git clone https://github.com/andresWeitzel/Lambda_Api_Gateway_Serverless_AWS_Example.git
cd Lambda_Api_Gateway_Serverless_AWS_Example
```

* Hace falta Node.js 20, que es el mismo runtime de la función.
* El proyecto no declara dependencias de aplicación. El lockfile está vacío y `npm ci` deja el entorno listo para el workflow.
* El deploy sale por GitHub Actions. En `.github/workflows/master.yml` el job está comentado. Al descomentarlo, un push a `master` ejecuta `serverless deploy` con la acción `serverless/github-action@v3.2`.
* El workflow lee las credenciales desde los secrets del repositorio: `AWS_ACCESS_KEY_ID` y `AWS_SECRET_ACCESS_KEY`.

</details>

### 1.2) Tecnologías [🔝](#índice-)

<details>
 <summary>Ver detalles</summary>

| **Tecnología** | **Versión** | **Uso** |
| --- | --- | --- |
| [Node.js](https://nodejs.org/) | 20.x | Runtime de la función |
| [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) | — | Ejecución en `us-east-2` |
| [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html) | HTTP API | Endpoint `GET /test` |
| [Serverless Framework](https://www.serverless.com/framework/docs) | GitHub Action 3.2 | Definición del servicio y deploy |
| [GitHub Actions](https://docs.github.com/actions) | — | Publicación con el workflow de `master` |
| [Git](https://git-scm.com/) | — | Control de versiones |

</details>

<br>

## Sección 2) Documentación y referencias.

### 2.0) Documentación y referencias [🔝](#índice-)

<details>
 <summary>Ver detalles</summary>

#### AWS

* [Documentación de AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)
* [AWS Lambda con Node.js](https://docs.aws.amazon.com/lambda/latest/dg/lambda-nodejs.html)
* [API Gateway HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html)

#### Serverless Framework

* [Documentación del Framework](https://www.serverless.com/framework/docs)
* [Guía de AWS en Serverless](https://www.serverless.com/framework/docs/providers/aws/guide/intro)
* [Eventos HTTP API](https://www.serverless.com/framework/docs/providers/aws/events/http-api)
* [GitHub Action de Serverless](https://github.com/serverless/github-action)

#### Repositorio y CI

* [Documentación de GitHub Actions](https://docs.github.com/actions)
* [Documentación de Node.js 20](https://nodejs.org/docs/latest-v20.x/api/)
* [Documentación de Git](https://git-scm.com/doc)

#### Aprendizaje

* [Playlist AWS Serverless](https://www.youtube.com/playlist?list=PLCl11UFjHurBhSQCwGDw7uDd2yAu5tVsV)

</details>
