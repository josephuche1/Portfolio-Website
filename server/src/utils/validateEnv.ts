import { cleanEnv, str, port } from 'envalid';

export default cleanEnv(process.env, {
    MONGO_URI: str(),
    PORT: port(),
    BUCKET_NAME: str()
})