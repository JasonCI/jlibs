
declare namespace JLibs {
    /**
     * 生成数字范围内的随机数
     * @param min 最小数字
     * @param max 最大数字
     * @returns number
     */
    export function random(min: number, max: number): number

    /**
     * 生成随机字符串
     * @param len
     * @returns string
     */
    export function uuid(len?: number): string

    /**
     * 字符串字节长度
     * @param str
     * @returns number
     */
    export function strLen(str: string): number

    /**
     * list 转 tree
     *
     * @param list
     * @param id
     * @param pid
     * @param childName
     * @returns Array<object>
     */
    export function listToTree(list: Array<object>, id: string, pid: string, childName: string): Array<object>

    /**
     * 数组去重复
     * @param list
     * @param key
     */
    export function unique<T>(list: Array<T>, key?: string): Array<T>
}

declare module 'J-Libs' {
    export = JLibs
}
