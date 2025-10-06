
# 🎧 Podcast Manager

  

## 📘 Descrição

Aplicação Node.js construída em **TypeScript**, seguindo a **arquitetura REST**, sem uso de frameworks externos para criação da API.

Desenvolvido sob a tutela do **Felipe – DIO (Digital Innovation One)**.

O objetivo é centralizar diferentes episódios de **podcasts em vídeo**, organizados por **categorias**, em um estilo semelhante ao **Netflix**


## 🧭 Domínio

**Podcasts em vídeo**, categorizados e listados de forma dinâmica.


  

## ⚙️ Funcionalidades
-  **Listar episódios** de podcasts em sessões de categorias

-  **Filtrar episódios** por nome do podcast
  

## 🧩 Estrutura do Projeto
PODCAST_MANAGER/  
│
├── src/  
│ ├── controllers/  
│ │ └── podcasts-controller.ts  
│ ├── models/  
│ │ ├── podcast-model.ts  
│ │ └── podcast-transfer-model.ts  
│ ├── repositories/  
│ │ ├── podcasts-repository.ts  
│ │ └── podcasts.json  
│ ├── routes/  
│ │ └── routes.ts
│ ├── services/
│ │ ├── filter-episodes-service.ts
│ │ └── list-episodes-service.ts
│ ├── utils/
│ │ ├── content-type.ts
│ │ ├── http-methods.ts
│ │ └── status-code.ts
│ ├── app.ts
│ └── server.ts
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

  

## 🔗 Endpoints

  

### **Listar todos os episódios**
**GET**  `/api/list`
**Response:**

```
[
	{
		"podcastName": "flow",
		"episode": "CBUM - Flow #319",
		"videoId": "pQSuQmUfS30",
		"cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
		"link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
		"categories": ["saúde", "esporte", "bodybuilder"]

	},
	{
		"podcastName": "flow",
		"episode": "RUBENS BARRICHELLO - Flow #339",
		"videoId": "4KDGTdiOV4I",
		"cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
		"link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
		"categories": ["esporte", "corrida"]

	}		
]
```

### **Filtrar episódios por nome**
**GET** `/api/episode?p={channel_name}`
**Response:**

```
[
	{
		"podcastName": "flow",
		"episode": "RUBENS BARRICHELLO - Flow #339",
		"videoId": "4KDGTdiOV4I",
		"cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
		"link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
		"categories": [
			"esporte",
			"corrida"
		]
	}
]
```

## 🧠 Como Funciona
O projeto segue os princípios da arquitetura REST, dividindo as responsabilidades em camadas claras:

**Controller:** recebe e direciona as requisições
**Service:** processa regras de negócio
**Repository:** manipula os dados armazenados
**Model:** define a estrutura (interfaces) dos objetos
**Utils:** centraliza constantes e tipos auxiliares

## 🚀 Execução
- Clone o repositório: `git clone https://github.com/BrunoJss/podcast_manager.git`
- Instale as dependências: `npm install`
- Compile os arquivos Typescript e inicie o servidor: `npm run dist`

A aplicação rodará no endereço configurado em .env, caso contrario a porta padrão será a 3331

## 🛠️ Tecnologias

Node.js
TypeScript
Arquitetura REST
Sem frameworks externos (HTTP puro)
