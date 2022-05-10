import { RouteKey } from '@/typing'
import { useNavigation as useNavigationNative } from '@react-navigation/native'

type UseNavigation = () => {
	navigate: (key: RouteKey, params?: Record<any, any>) => void
	goBack: () => void
}

export const useNav = useNavigationNative as UseNavigation
