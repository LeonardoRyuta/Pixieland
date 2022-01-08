import { Web3ReactProvider } from "@ethersproject/providers";

export default function getLibrary(provider) {
    return new Web3ReactProvider(provider)
}