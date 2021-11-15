import server from './app'

const PORT  = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT} !`);
});