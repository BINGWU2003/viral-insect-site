# viral-insect-site

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## 表格字段

### 病毒-植物感染关系

![image-20250110225713099](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20250110225713099.png)

| 字段                      | 说明              |
| ------------------------- | ----------------- |
| virus_family(virusFamily) | 表格VirusFamily列 |
| virus_name                | 表格Virus列       |
| virus_tax_id(virusTaxID)  | 表格VirusTaxID列  |
| host_name                 | 表格Plant列       |
| host_tax_id               | 表格PlantTaxID列  |
| virus_mode(病毒存在模式)  | 表格VirusMode列   |

### 病毒-昆虫传播关系

![image-20250110225657057](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20250110225657057.png)

| 字段                      | 说明              |
| ------------------------- | ----------------- |
| virus_family(virusFamily) | 表格VirusFamily列 |
| virus_name                | 表格Virus列       |
| virus_tax_id(virusTaxID)  | 表格VirusTaxID列  |
| vector_order              | 表格InsectOrder列 |
| vector                    | 表格Insect列      |
| vector_tax_id             | 表格InsectTaxID列 |
| virus_mode(病毒存在模式)  | 表格VirusMode列   |

### 病毒-植物-昆虫关系

![image-20250110230000235](https://bing-wu-doc-1318477772.cos.ap-nanjing.myqcloud.com/typora/image-20250110230000235.png)

| 字段                      | 说明               |
| ------------------------- | ------------------ |
| virus_family(virusFamily) | 表格VirusFamily列  |
| virus_genus               | 表格VirusGenus列   |
| virus_name                | 表格Virus列        |
| virus_tax_id(virusTaxID)  | 表格VirusTaxID列   |
| host_name                 | 表格HostName列     |
| host_tax_id               | 表格HostTaxID列    |
| vector_order              | 表格VectorOrder列  |
| vector_family             | 表格VectorFamily列 |
| vector_genus              | 表格VectorGenusy列 |
| vector                    | 表格Insect列       |
| vector_tax_id             | 表格InsectTaxID列  |
| virus_mode(病毒存在模式)  | 表格VirusMode列    |
