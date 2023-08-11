import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import {FaFire, FaPoo} from 'react-icons/fa'
function SideBar () {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-sm">
            <SideBarIcon icon={<FaFire size="28"/>}/>
            <SideBarIcon icon={<FaPoo size="28"/>}/>
            <SideBarIcon icon={<BsPlus size="28"/>}/>
            <SideBarIcon icon={<BsGearFill size="28"/>}/>
        </div>
    )

}
const SideBarIcon = ({ icon })=> (
    <div className='relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-50 text-green-300 hover:bg-green-600 rounded-3x1 hover:rounded-3xl transition-all duration-300 ease-linear cursor-pointer'>
        {icon}
    </div>
)
export default SideBar