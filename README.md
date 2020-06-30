# Webpay Integration

## Setup

### Generate SSL certificates

Use [mkcert](https://github.com/FiloSottile/mkcert) for local development

```bash
mkcert domain.com
```

### Simulate domain `/etc/hosts`

```bash
127.0.0.1 domain.com
```

### Setting

Create .env file and complete with correct information. Use `.env.dist` as example.

```bash
cp .env.dist .env
```

### Dependecies

```bash
yarn install
```

## Running

```bash
yarn run start
```

## Datos de integración

- **Número de tarjeta**: `4051885600446623`
- **CVV**: `123`
- **Vencimiento**: Cualquiera posterior a la fecha actual

- **RUT**: `11.111.111-1`
- **Clave**: `123`

## References

- [https://www.transbankdevelopers.cl/documentacion/webpay#webpay](https://www.transbankdevelopers.cl/documentacion/webpay#webpay)
- [https://www.transbankdevelopers.cl/referencia/webpay#webpay-plus](https://www.transbankdevelopers.cl/referencia/webpay#webpay-plus)
