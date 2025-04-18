"use client"
import { createContext, useContext, useEffect, useState } from "react"
import { auth, db, googleProvider } from "@/fireBase-config"
import { signInWithPopup, signOut } from "firebase/auth"
import { doc, collection, getDocs, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore"
import toast from "react-hot-toast"
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
    console.log(form);
    
      const userDoc = doc(db, "users", process.env.NEXT_PUBLIC_KEY as string)
      await updateDoc(userDoc, {
        notification: arrayUnion({...form}),
      }).then(() => {
        toast.success('Đăng ký thành công.', {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#10B981',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
          },
        });
      })
  }
  // donate ở home page
  const handlePostDonate = async (form: any) => {
      const userDoc = doc(db, "users", process.env.NEXT_PUBLIC_KEY as string)
      await updateDoc(userDoc, {
        donate: arrayUnion({...form}),
      }).then(() => {
        toast.success('Cảm ơn bạn đã ủng hộ! Quyên góp của bạn đã được xử lý thành công.', {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#10B981',
            color: '#fff',
            padding: '16px',
            borderRadius: '8px',
          },
        });
      })
  }
  // popup nút tham gia cùng chúng tôi 
  const handlePostJoinGroup = async (form: any) => {
      try {
        const userDoc = doc(db, "users", process.env.NEXT_PUBLIC_KEY as string)
        await updateDoc(userDoc, {
          joinGroup: arrayUnion({...form}),
        })
        return true
      } catch (error) {
        console.log(error)
        return false
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
