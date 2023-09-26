import { create } from 'ipfs-http-client';

async function ipfsClient() {
  const ipfs = await create({
    host: 'ipfs.infura.io',
    port: 8888, // Usar el puerto 443 para HTTPS
    protocol: 'https'
  });
  return ipfs;
}

async function saveText() {
    const ipfs = await ipfsClient();
    let result = await ipfs.add('Hola');
    console.log('File added to IPFS. CID:', result);
  }

saveText();


//8_yDxWp6mAdqy0IgFB-aZHAksrjvQttR