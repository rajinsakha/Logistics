import { FaTruckFast } from "react-icons/fa6";
import { MdFlightTakeoff } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { operationImg1, operationImg2, operationImg3 } from "../assets";


export const services = [
    {Icon: FaTruckFast, title: "Warehousing Services", description:"A pay as-you-go solution for: pallet storage, inventory management, fulfillment(e.g. pick and pack), in/out-bound solutions, and more."},
    {Icon: MdFlightTakeoff, title: "Global Freight", description:"Search and compare the best shipping rates among dozens of trusted logistic partners for the last mile delivery and freight."},
    {Icon: FaShoppingBag, title: "Packaging Solutions", description:"Our packaging solutions are optimized for each individual customer and are selected based on on the customer's specific needs and requirements."} ,

]

export const operations = [
    {number:"1", title:"Connect", description:"You're currently running your store on Shopify, WooCommerce, or any other platform. As a first step, you'll connect your store with our platform.", imgURL: operationImg1},
    {number:"2", title:"Store", description:"Then, you can send us your inventory and the fun begins. We'll choose a delivery day together so your fulfilment is not interrupted.", imgURL: operationImg2},
    {number:"3", title:"Ship", description:"We pick, pack and ship all incoming orders directly from our own warehouse until 12pm on the same day.", imgURL: operationImg3},
]