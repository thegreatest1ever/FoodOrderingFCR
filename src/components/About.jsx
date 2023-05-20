import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    Welcome to <b>Fresh Corner Restaurant</b>! Your go to for quick, delicious, and satisfying Food.
                    At Fresh Corner Restaurant, our mission is to serve fast food made from fresh ingredients and prepared with care.
                    Indulge in a wide variety of fast food classics and innovative creations that will tantalize your taste buds.
                    Our menu features a delectable selection of Byenda(offals) and Katogo crafted to satisfy your cravings.
                    We understand the value of your time, which is why we prioritize speed and efficiency without compromising on taste.
                    With our streamlined ordering process and quick service, you can enjoy a flavorful meal on the go or in the comfort of our dining area.
                    Join us today and experience fast food that is not only quick and convenient but also incredibly delicious.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}