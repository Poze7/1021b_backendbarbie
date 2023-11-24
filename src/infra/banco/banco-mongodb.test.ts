import {describe,test, expect, beforeEach} from 'vitest'
import BancoMongoDB from './banco-mongodb'

describe('BancoMongoDB teste', () => {
    const bancoMongoDB = new BancoMongoDB()
    beforeEach(async () => {
        await bancoMongoDB.filmeModelo.deleteMany({})
    })
    test('BancoMongoDB', () => {
        expect(bancoMongoDB).toBeDefined()
    })
    test('deve salvar um filme', async () => {
        const filme = {
            id: 1,
            titulo: 'O Poderoso Chefão',
            descricao: 'Filme de máfia',
            imagem: 'https://www.seekpng.com/png/detail/11-114090_o-poderoso-chefinho-baby-boss-13-png-imagens.png'
        }
        const result = await bancoMongoDB.salvar(filme)
        expect(result).toEqual(filme)
    })
})