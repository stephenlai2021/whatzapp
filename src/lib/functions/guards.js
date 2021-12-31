import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const authGuard = ({ page }) => {
  onAuthStateChanged
}