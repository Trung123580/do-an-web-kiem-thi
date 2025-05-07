import VideoControl from "@/components/video/VideoControl"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React, { useCallback, useEffect, useRef, useState } from "react"
import ReactPlayer from "react-player"
const formatDuration = (value: number) => {
  const minute = Math.floor(value / 60)
  const secondLeft = value - minute * 60
  return `0${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`
}

const VideoControls = ({linkPlay, handleChangeSlots}: {handleChangeSlots:any, linkPlay:string}) => {
  const router = useRouter()
  const [isPlay, setIsPlay] = useState(false)
  const [isLoadingVideo, setIsLoadingVideo] = useState<boolean>(false)
  const [defaultDuration, setDefaultDuration] = useState(0)
  const [episodesList, setEpisodesList] = useState<any>([])
//   const [dataVideo, setDataVideo] = useState<any>({
//     linkPlay:
//       "https://s3-figma-videos-production-sig.figma.com/video/TEAM/1435187678749878922/92fc415be422d9d32b9c14de42a918d5a785bb7a?Expires=1747612800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C0Lz74BTtou9MW8XKxn95cEZJVU9~UKX-xuLmtPohfoXIz-gTJv~pHt308DC8tP~kn4OSCjew694RzwrRbAJ3VSQVTbGQ1HH61EXc4iFxbFkbUZar6n2853GhcuRvft~s6qRraS9Gt6fDeBCyRB27xnSE77krBwK2q597oe57dCCXFmY18qjeNh0EG0Gt4CI66l7gdzDSWm400qvDsuOFW7Himhj9hdD444GrXTZ1L3iiLUTpEwP2alWBL-Yrb9yrNeAfkrOoDXpoDRQW3yqeAENCMNMhwsNdJ4Od2vArm6BUTsAe3I4-XbPHrazgwbfeLT2uLnIRSURzZkD7izx~w__",
//     type: "",
//   })
  const [currentSeconds, setCurrentSeconds] = useState<number>(0)
  const [volume, setVolume] = useState(100)
//   const { linkPlay } = dataVideo
  const refMovie = useRef<any>(null)
  const refPlayer = useRef<any>(null)
  const refSwiper = useRef<any>(null)
  const refTimeOut = useRef<NodeJS.Timeout | null>(null)
  const [statePlayVideo, setStatePlayVideo] = useState({
    // isPlay: false,
    // isShowIcon: false,
    defaultIsPlay: true,
    // isMouse: true,
    isLoadingVideo: false,
    // quality: localStorage.getItem("quality") || "720p", // tao localStorage
    // isOpenQuality: false,
    // isOpenSetting: false,
    percentSecondsLoaded: 0,
    // isOpenDrawer: false,
  })
  const [stateScreenMode, setStateScreenMode] = useState({
    isTheaterMode: false,
    isMiniPlayer: false,
  })
  const { percentSecondsLoaded, defaultIsPlay } = statePlayVideo
  const { isMiniPlayer, isTheaterMode } = stateScreenMode
  // const {
  //   user,
  //   isAuthenticated,
  //   currentUser,
  //   handle: { onLoading, onShowPopup, onShowToast, onToggleMovie, onAddHistory },
  // }: any = useApp()

  const searchParams = useSearchParams()
  const pathName = usePathname()
  const searchPractice: string = searchParams.get("tap") as string
  const searchServerName: number = Number(searchParams.get("server"))
  // const {
  //   isLoading,
  //   data: { detail, relate },
  // }: storeState = useSelector((state: RootState) => state.storeApp)
  // const { isPlay } = useSelector((state: RootState) => state.storeAction)
  // const dispatch = useDispatch()
  // const { device } = useResize()
  // const defaultPosterVideo = useMemo(() => {
  //   if (!detail) return ""
  //   return detail.movie.thumb_url
  // }, [detail])
  // console.log(relate);

  const getSVNumber = (serverName: string) => {
    const match = serverName.match(/SV\s?#(\d+)/) // Lấy số từ "SV #1", "SV #2", ...
    return match ? parseInt(match[1], 10) : Infinity // Nếu không tìm thấy, trả về Infinity (để xếp cuối)
  }
  // useEffect(() => {
  //   dispatch(getDetailMovie({ slug }) as any)
  //   return () => {
  //     dispatch(clearDataCategory(null) as any)
  //     setDataVideo({ linkPlay: "", type: "" })
  //   }
  // }, [slug])
  useEffect(() => {
    if (refPlayer.current) {
      const seconds = refPlayer.current.getSecondsLoaded()
      const duration = refPlayer.current.getDuration()
      const ratio = Math.min(Math.floor((seconds / duration) * 100), 100)
      setStatePlayVideo((prev) => ({ ...prev, percentSecondsLoaded: ratio }))
    }
  }, [refPlayer, currentSeconds])
  // useEffect(() => {
  //   let time: NodeJS.Timeout
  //   if (detail) {
  //     setIsLoadingVideo(false)
  //     if (detail.episodes.length === 0) {
  //       time = setTimeout(() => {
  //         router.back()
  //       }, 5000)
  //       return
  //     }
  //     const convertSort = [...detail.episodes].sort((a: any, b: any) => {
  //       const svNumberA = getSVNumber(a.server_name)
  //       const svNumberB = getSVNumber(b.server_name)
  //       return svNumberA - svNumberB
  //     })
  //     if (searchServerName && searchPractice) {
  //       const findServer = convertSort[searchServerName - 1].server_data.filter((item: any) => item.name !== "undefined")
  //       const episode = findServer.find(({ slug }: itemServerData) => slug === String(searchPractice))
  //       // check tim duoc tap ko
  //       if (!episode) router.back()
  //       const checkLink = convertLinkPlayer({ link: episode.link_embed })
  //       if (checkLink.type === "video") {
  //         setDataVideo({ linkPlay: checkLink.linkPlay, type: "video" })
  //       } else {
  //         setDataVideo({ linkPlay: checkLink.linkPlay, type: "iframe" })
  //       }
  //       document.getElementById("wrapperVideo")?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
  //       document.getElementById("wrapperVideo-iframe")?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
  //     } else {
  //       const defaultLink = (convertSort[0]?.server_data.filter((item: any) => item.name !== "undefined")[0].link_embed as string) ?? ""
  //       const checkLink = convertLinkPlayer({ link: defaultLink })
  //       if (checkLink.type === "video") {
  //         setDataVideo({ linkPlay: checkLink.linkPlay, type: "video" })
  //       } else {
  //         setDataVideo({ linkPlay: checkLink.linkPlay, type: "iframe" })
  //       }
  //     }
  //     setEpisodesList(convertSort)
  //     dispatch(getMoviesRelate({ country: detail.movie.country[0].slug, status: detail.movie.status }) as any)
  //   }
  //   return () => time && clearTimeout(time)
  // }, [detail, searchServerName, searchPractice])
  const handleChangeEpisode = (indexServer: number, episode: string) => {
    router.push(pathName + "?" + `server=${indexServer}` + "&" + `tap=${episode}`)
  }
  const handleNext = useCallback(() => {
    if (refSwiper.current) refSwiper.current?.swiper.slidePrev()
  }, [refSwiper.current])

  const handlePrev = useCallback(() => {
    if (refSwiper?.current) refSwiper.current?.swiper.slideNext()
  }, [refSwiper.current])

  const handleTogglePlayVideo = () => setIsPlay(!isPlay)
  const handleToggleMiniMap = () => setStateScreenMode((prev) => ({ ...prev, isMiniPlayer: !prev.isMiniPlayer }))
  const durationCurrent = formatDuration(Number(Math.floor(refPlayer.current?.getDuration())) - Number(currentSeconds))
  const durationVideo = durationCurrent === "0:00" ? formatDuration(defaultDuration) : durationCurrent
  const optionVideoControls = {
    //   device: device,
    isPlay: isPlay,
    volume: volume,
    currentSeconds: currentSeconds,
    secondsLoaded: percentSecondsLoaded || 0,
    maxDuration: refPlayer.current?.getDuration(),
    slots: formatDuration(currentSeconds),
    changeCurrentTime: durationVideo,
    onChangeCommitted: (_: any, value: any) => refPlayer.current.seekTo(value),
    onTogglePlayVideo: handleTogglePlayVideo,
    onChange: (_: any, value: number) => setCurrentSeconds(Math.floor(value)),
    onChangeVolume: (_e: any, value: number) => setVolume(value),
    setChangeVolume: (number: number) => setVolume(number),
    onChangeTheaterMode: async () => {
      setStateScreenMode((prev) => ({ ...prev, isTheaterMode: !prev.isTheaterMode }))
      if (document.fullscreenElement !== null) await document.exitFullscreen()
      // scroll center
      refTimeOut.current = setTimeout(() => {
        refMovie.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
      }, 100)
    },
    onRePlay: async () => {
      const currentTime = refPlayer.current.getCurrentTime()
      await refPlayer.current.seekTo(Math.max(currentTime - 10, 0), "seconds") 
    },
    onForward: async () => {
      const currentTime = refPlayer.current.getCurrentTime()
      await refPlayer.current.seekTo(currentTime + 10, "seconds")
    },
    onToggleMiniMap: handleToggleMiniMap,
    onChangeFullScreen: async () => {
      if (!refPlayer.current) return
      if (document.fullscreenElement === null) {
        const wrapperVideo = document.querySelector("#wrapperVideo")
        if (wrapperVideo) await wrapperVideo.requestFullscreen()
      } else {
        await document.exitFullscreen()
        // scroll center
        refTimeOut.current = setTimeout(() => {
          refMovie.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
        }, 100)
      }
    },
  }
  useEffect(() => {
    const wrapperVideo = document.querySelector("#wrapperVideo-iframe")
    const wrapperControl = document.querySelector("#wrapperControl")
    const btnPlay = document.querySelector("#btnPlay")
    if (isPlay) {
      if (!wrapperVideo?.classList.contains("cursor-none")) {
        refTimeOut.current = setTimeout(() => {
          wrapperVideo?.classList.add("cursor-none")
          wrapperControl?.classList.add("hidden")
          btnPlay?.classList.add("hidden")
        }, 2500)
      }
    }
    if (!isPlay) {
      wrapperVideo?.classList.remove("cursor-none")
      wrapperControl?.classList.remove("hidden")
      btnPlay?.classList.remove("hidden")
    }
    // default anh khi chua play video
    if (isPlay && defaultIsPlay) setStatePlayVideo((prev) => ({ ...prev, defaultIsPlay: false }))
    // handle hide mouse
    const handleHideController = () => {
      if (refTimeOut.current) clearTimeout(refTimeOut.current)
      wrapperVideo?.classList.remove("cursor-none")
      wrapperControl?.classList.remove("hidden")
      refTimeOut.current = setTimeout(() => {
        wrapperVideo?.classList.add("cursor-none")
        wrapperControl?.classList.add("hidden")
        btnPlay?.classList.add("hidden")
      }, 2500)
    }
    if (wrapperVideo && wrapperControl) {
      wrapperVideo.addEventListener("mousemove", handleHideController)
    }
    return () => {
      if (wrapperVideo) wrapperVideo.removeEventListener("mousemove", handleHideController)
    }
  }, [isPlay])
  useEffect(() => {
    if (!refPlayer.current) return

    const handleListenKeydown = async (e: any) => {
      if (e.code === "Space" && e.target.tagName !== "INPUT") {
        e.preventDefault()
        handleTogglePlayVideo()
      }
      if (e.code === "ArrowRight" && e.target.tagName !== "INPUT") {
        e.preventDefault()
        const currentTime = refPlayer.current.getCurrentTime()
        await refPlayer.current.seekTo(currentTime + 10, "seconds")
      }
      if (e.code === "ArrowLeft" && e.target.tagName !== "INPUT") {
        e.preventDefault()
        const currentTime = refPlayer.current.getCurrentTime()
        await refPlayer.current.seekTo(Math.max(currentTime - 10, 0), "seconds") // nếu nhỏ hơn 0 trả về 0
      }
      if (e.code === "ArrowUp" && e.target.tagName !== "INPUT") {
        e.preventDefault()
        setVolume((prevVolume) => Math.min(prevVolume + 10, 100)) // nếu lớn hơn 100 trả về 100
      }
      if (e.code === "ArrowDown" && e.target.tagName !== "INPUT") {
        e.preventDefault()
        setVolume((prevVolume) => Math.max(prevVolume - 10, 0)) // nếu nhỏ hơn 0 trả về 0
      }
      if (e.code === "KeyF" && e.target.tagName !== "INPUT") {
        e.preventDefault()
        optionVideoControls.onChangeFullScreen()
      }
    }
    window.addEventListener("keydown", handleListenKeydown)
    return () => {
      window.removeEventListener("keydown", handleListenKeydown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refPlayer.current, volume, isPlay])
  return (
    <div className='max-w-3xl mx-auto p-4' id="wrapperVideo-iframe">
      <div className="relative rounded-lg overflow-hidden">
        <ReactPlayer
          ref={refPlayer}
          controls={false}
          pip={isMiniPlayer}
          url={linkPlay}
          volume={volume / 100}
          playing={isPlay}
          // light={defaultIsPlay ? <img alt='' className='rounded-md object-contain' src={defaultPosterVideo} /> : ""}
          width={"100%"}
          height={"100%"}
          className='bg-white/5 overflow-hidden rounded-md aspect-video'
          onProgress={(e) => {
            setCurrentSeconds(Math.floor(e.playedSeconds))
            handleChangeSlots(formatDuration(Math.floor(e.playedSeconds)))
          }}
          onBuffer={() => setStatePlayVideo((prev) => ({ ...prev, isLoadingVideo: true }))}
          onBufferEnd={() => setStatePlayVideo((prev) => ({ ...prev, isLoadingVideo: false }))}
          onEnablePIP={() => {
            setStateScreenMode((prev) => ({ ...prev, isMiniPlayer: true }))
            setStatePlayVideo((prev) => ({ ...prev, isPlay: true }))
          }}
          onDisablePIP={() => {
            setStateScreenMode((prev) => ({ ...prev, isMiniPlayer: false }))
            setStatePlayVideo((prev) => ({ ...prev, isPlay: false }))
          }}
        />
        <div id="wrapperControl">
            <VideoControl {...optionVideoControls} />
        </div>
      </div>
    </div>
  )
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
}

export default VideoControls
