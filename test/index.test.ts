import {random, listToTree, byteLen, uuid, unique} from '../src/index'

describe('生成数字范围内的随机数', () => {
    it('random(1, 1) -> should return 1', () => {
        const rand = random(1, 1)
        expect(rand).toBe(1)
    })
    it('random(1, 10) -> should return number', () => {
        const rand = random(1, 10)
        expect(rand >= 1 && rand <= 10).toBeTruthy()
    })
})


describe('数组转树形', () => {
    it('listToTree([]) should []', function () {
        const empty = listToTree([])
        expect(Array.isArray(empty)).toBeTruthy()
        expect(empty.length).toBe(0)
    });
    it('listToTree([{...}]) should [{...}]', function () {
        const res = listToTree([
            {id: 1, name: '部门A', pid: 0},
            {id: 2, name: '部门B', pid: 0},
            {id: 3, name: '部门C', pid: 1},
            {id: 4, name: '部门D', pid: 1},
            {id: 5, name: '部门E', pid: 2},
            {id: 6, name: '部门F', pid: 3},
            {id: 7, name: '部门G', pid: 2},
            {id: 8, name: '部门H', pid: 4}
        ])
        const [child1, child2] = res
        expect(Array.isArray(res)).toBeTruthy()
        expect(res.length).toBe(2)
        // expect(child1.id).toBe(1)
        // expect(child2.id).toBe(2)
        // expect(child1.children.length).toBe(2)
    });
})

describe('字符字节长度', () => {
    it('strLen("abc") should 3', function () {
        const len = byteLen('abc')
        expect(len).toBe(3)
    });
    it('strLen("啊波此") should 6', function () {
        const len = byteLen('啊波此')
        expect(len).toBe(6)
    });
    it('strLen("a啊B此") should 6', function () {
        const len = byteLen('啊波此')
        expect(len).toBe(6)
    });
})
// describe('随机字符串', () => {
//     it('uuid() length should 8', function () {
//         const id = uuid()
//         expect(id.length).toBe(8)
//     });
//
//     it('uuid() length should 8', function () {
//         const id = uuid(32)
//         expect(id.length).toBe(32)
//     });
//     it('gen uuid() 10000 length should 10000', function () {
//         let set = new Set()
//         for (let i = 0; i < 10000; i++) {
//             set.add(uuid(10))
//         }
//         expect(set.size).toBe(10000)
//     });
// })

describe('数组去重复', () => {
    it('unique([num,str,bool,NaN,{}]) ', function () {
        const arr = unique([1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}])
        expect(arr.length).toBe(13)
    });
    it('unique([{obj}]) ', function () {
        const arr = unique([{id: 1}, {id: 1}, {id: 2}, {id: 9}], 'id')
        expect(arr.length).toBe(3)
    })
    it('unique([{obj}]) ', function () {
        const arr = unique([{id: 1}, {id: 1}, {id: 2}, {id: 9}])
        expect(arr.length).toBe(4)
    })
})