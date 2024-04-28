/* import { fs, shell } from "@tauri-apps/api"
import { fetch, ResponseType, Body } from "@tauri-apps/api/http"
import { appDataDir } from "@tauri-apps/api/path" */

export default async function exportStats() {
  if (typeof window === "undefined") {
    return
  }

  const { writeTextFile } = require("@tauri-apps/api/fs")
  const { homeDir } = require("@tauri-apps/api/path")
  const { fetch, ResponseType, Body } = require("@tauri-apps/api/http")
  const token = localStorage.getItem("Cookie")
  const response = await fetch("http://192.168.1.3:3000/api/stats", {
    method: "POST",
    responseType: ResponseType.JSON,
    body: Body.json({ token }),
  })

  const stats = response.data

  const homeDirPath = await homeDir()

  const data = JSON.stringify(stats)
  const path = `${homeDirPath}/Desktop/stats.json`

  await writeTextFile({ path, contents: data })
}
