import React from "react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link } from "@inertiajs/react";

const Login = () => {
    return (
        <>
            <Head title="Login" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div className="mx-auto flex items-center flex-col">
                        <div className="my-[70px] text-center">
                            <div className="font-semibold text-[56px] mb-3 title">
                                Login to Moonlix
                                <img src="assets/" alt="" />
                            </div>
                            <p className="text-2xl text-[#767676] leading-8">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <InputLabel
                                        forinput="email"
                                        value="Enter your email address"
                                    />
                                    <TextInput
                                        placeholder="Enter your email"
                                        className="input-primary"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        forinput="email"
                                        value="Enter your password"
                                    />
                                    <TextInput placeholder="Enter your password" />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <PrimaryButton type="button" variant="primary">
                                    <span className="text-base text-white ">
                                        Start Watching
                                    </span>
                                </PrimaryButton>
                                <Link href={route("prototype.register")}>
                                    <PrimaryButton
                                        type="button"
                                        variant="light-outline"
                                    >
                                        <span className="text-base text-white ">
                                            Create New Account
                                        </span>
                                    </PrimaryButton>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
