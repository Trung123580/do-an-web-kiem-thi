"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { auth, db, googleProvider } from "@/fireBase-config"
import { signInWithPopup, signOut } from "firebase/auth"
import { doc, collection, getDocs, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore"
// import Cookies from "universal-cookie"
// import { toast } from "react-toastify"
// import { popup } from "@/utils/constants"
// import dayjs from "dayjs"
// import { useDispatch } from "react-redux"
// import { setIsLoading } from "@/store/storeApi"
type AuthContextType = {
  handles:{
    onPostRegisterNotification: (props: any) => void,
    onPostDonate: (props: any) => void,
    onPostJoinGroup: (props: any) => void,
  }
}
const ContextApp = createContext({} as AuthContextType)
const expirationDate = new Date()
// const cookies = new Cookies()
enum StringEnum {
  success = "success",
  error = "error",
}
const ContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [currentUser, setCurrentUser] = useState<any>(null)
  // const [user, setUser] = useState<any>(null)
  const userCollection = collection(db, "users")
  useEffect(() => {
    const getUser = async () => {
      try {
        const docRef = doc(db, "users", process.env.NEXT_PUBLIC_KEY as string)
        const docSnap = await getDoc(docRef)
        const data = docSnap.data()
        console.log(data)
        // chỗ này lấy all data anh check log đoạn này nhé
        setCurrentUser({ ...data })
      } catch (error) {
        console.error(error)
      }
    }
    getUser()
  }, [])
  // => vơi cả anh tự tạo 1 trường id có hàm idv4 đó ạ
  // chỗ form footer
  const handlePostRegisterNotification = async (form: any) => {
    if (currentUser) {
      const userDoc = doc(db, "users", process.env.NEXT_PUBLIC_KEY as string)
      await updateDoc(userDoc, {
        notification: form,
      }).then(() => {
        alert('success')
      })
    }
  }
  // donate ở home page
  const handlePostDonate = async (form: any) => {
    if (currentUser) {
      const userDoc = doc(db, "users", process.env.NEXT_PUBLIC_KEY as string)
      await updateDoc(userDoc, {
        donate: form,
      }).then(() => {
        alert('success')
      })
    }
  }
  // popup nút tham gia cùng chúng tôi 
  const handlePostJoinGroup = async (form: any) => {
    if (currentUser) {
      const userDoc = doc(db, "users", process.env.NEXT_PUBLIC_KEY as string)
      await updateDoc(userDoc, {
        joinGroup: form,
      }).then(() => {
        alert('success')
      })
    }
  }
  return (
    <ContextApp.Provider
      value={{
        // isAuthenticated: !!user,
        // user: user,1
        // currentUser: currentUser,
        handles:{
          onPostRegisterNotification : handlePostRegisterNotification,
          onPostDonate : handlePostDonate,
          onPostJoinGroup: handlePostJoinGroup
        }
      }}>
      {children}
    </ContextApp.Provider>
  )
}

export default ContextProvider
export const useApp = () => useContext(ContextApp)
