import Switch from "@mui/material/Switch";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function AccountSecurity() {
    return (
        <div className="p-px rounded-xl bg-linear-to-b from-[#3F52B4] to-[#B22459]">
            <div className="w-full p-8 bg-white  text-[#111928] rounded-xl" >

                <h1 className="text-center text-3xl font-semibold mb-8">
                    Account & Security
                </h1>

                {/* Biometric */}
                <div className="flex items-center justify-between mb-6">
                    <p className="text-xl">Biometric ID</p>
                    <Switch defaultChecked color="primary" />
                </div>

                {/* Face ID */}
                <div className="flex items-center justify-between mb-10">
                    <p className="text-xl">Face ID</p>
                    <Switch defaultChecked color="primary" />
                </div>

                {/* Cards */}
                <div className="space-y-5">

                    {/* Device Management */}
                    <CardItem
                        title="Device Management"
                        desc="Manage your account on the various devices you own."
                    />

                    {/* Deactivate Account */}
                    <CardItem
                        title="Deactivate Account"
                        desc="Temporarily deactivate your account. Easily reactivate when you're ready."
                    />

                    {/* Delete Account */}
                    <CardItem
                        title="Delete Account"
                        desc="Permanently remove your account and data. Proceed with caution."
                        titleClass="text-red-500"
                    />

                </div>
            </div >
        </div>


    );
}

type CardItemProps = {
    title: string;
    desc: string;
    titleClass?: string;
};

function CardItem({ title, desc, titleClass = "" }: CardItemProps) {
    return (
        <div className="bg-white text-[#111928] rounded-xl p-5 shadow-[0_2px_8px_0px_#838BB41F]  flex justify-between items-center">
            <div>
                <p className={`text-xl font-semibold ${titleClass}`}>{title}</p>
                <p className="text-gray-500 text-lg">{desc}</p>
            </div>

            <ArrowForwardIosIcon sx={{ fontSize: 20, color: "#666" }} />
        </div>
    );
}
