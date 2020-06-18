import app from './app';

// eslint-disable-next-line no-console
app.listen(process.env.PORT, () => console.log(`App running on PORT ${process.env.PORT} | ENV: ${process.env.ENV}`));
