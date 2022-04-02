export const random = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const uuid = (len?: number): string => {
    if (URL) {
        return URL.createObjectURL(new Blob()).slice(-36).slice(0, len || 8)
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    }).slice(0, len || 8)
}

export const byteLen = (str: string): number => {
    let len = 0
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i)
        //单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len += 1
        } else { // 汉字加2
            len += 2
        }
    }
    return len
}

export const listToTree = (list: any, id = 'id', pid = 'pid', childName = 'children'): Array<object> => {
    const res: Array<object> = []
    if (!Array.isArray(list) || !list.length) return res
    const map = list.reduce((res, v) => (res[v[id]] = v, res), {})
    for (const item of list) {
        if (item[pid] === 0) {
            res.push(item)
            continue
        }
        if (item[pid] in map) {
            const parent: any = map[item[pid]]
            parent[childName] = parent[childName] || []
            parent[childName].push(item)
        }
    }
    return res
}

export function unique<T>(list: Array<T>, key?: string): Array<T> {
    if (!Array.isArray(list) || !list.length) return []
    // if (x) return Array.from(new Set(list))
    let map = new Map();
    let array: Array<T> = [];
    list.forEach((o: any) => {
        let k = o;
        if (key) k = o[key]
        if (!map.has(k)) {
            map.set(k, true);
            array.push(o);
        }
    })
    return array;
}