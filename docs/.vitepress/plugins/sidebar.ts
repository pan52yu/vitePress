// const sidebar = {
//   "/": [
//     {
//       text: "中华人民共和国宪法",
//       link: "/legal/Constitution",
//     },
//     {
//       text: "民法典",
//       collapsed: true,
//       items: [
//         {
//           text: "附则",
//           link: "/民法典/附则",
//         },
//       ],
//     },
//   ],
// }

import * as path from "path";
import * as fs from "fs";

const sidebar = {}


export {
    sidebar
}


// 文件根目录
const DIR_PATH = path.resolve()
// 白名单,过滤不是文章的文件和文件夹
const WHITE_LIST = ["index.md", "_index.md", ".vitepress", "node_modules", ".idea", ".github", "assets", "DLC", "scripts"]

// 判断是否是文件夹
const isDirectory = (path: fs.PathLike) => fs.lstatSync(path).isDirectory()

// 取差值
const intersections = (arr1: any[], arr2: Iterable<unknown>) => Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))))

/**
 * 获取侧边栏
 * @param params 文件夹下的所有文件或者文件夹
 * @param path1 文件夹路径
 * @param pathname 文件夹名字
 */
const getList = (params: any[], path1: string, pathname: string) => {
    // 存放结果
    const res: any[] = []
    // 开始遍历params
    for (let file in params) {
        // 拼接目录
        const dir = path.join(path1, params[file])
        // 判断是否是文件夹
        const isDir = isDirectory(dir)
        if (isDir) {
            // 如果是文件夹,读取之后作为下一次递归参数
            const files = fs.readdirSync(dir)
            res.push({
                text: params[file],
                collapsed: true,
                items: getList(files, dir, `${pathname}/${params[file]}`),
            })
        } else {
            // 获取名字
            const name = path.basename(params[file])
            // console.log(name, "name")
            if (WHITE_LIST.includes(name)) {
                continue
            }
            // 排除非 md 文件
            const suffix = path.extname(params[file])
            if (suffix !== ".md") {
                continue
            }
            res.push({
                text: name.replace(".md", ""),
                link: `/${pathname}/${name}`,
            })
        }
    }
    // console.log(res, 'res')
    return res
}

export const set_sidebar = () => {
    try {
        const pathname = 'laws'
        // 获取pathname的路径
        const dirPath = path.join(DIR_PATH, `/docs/${pathname}`)

        // 读取pathname下的所有文件或者文件夹
        const files = fs.readdirSync(dirPath)
        // 过滤不是文章的文件和文件夹
        const items = intersections(files, WHITE_LIST).filter((item) => isDirectory(path.join(dirPath, item)))

        // 去除不是文件夹的文件
        const res = items.filter((item) => isDirectory(path.join(dirPath, item)))
        // console.log(res, 'res')

        return getList(items, dirPath, pathname)
    } catch (e) {
        console.log(e)
        return []
    }
}
