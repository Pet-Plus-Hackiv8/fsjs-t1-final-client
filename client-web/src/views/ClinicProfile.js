import { useEffect, useState } from "react"
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from "react-places-autocomplete";
import ActionTable from "../components/Tables/ActionTable";

export default function EditClinic() {
    const [formData, setFormData] = useState({
        name: "",
        logo: "",
        phoneNumber: "",
        address: "",
        latlng : {}
    })



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    const handleChange = ({ name, value }) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleChangeAddress = value => {
        setFormData({
            ...formData,
            address: value
        })
    }
    const handleSelect = async (address) => {
        try {
            const res = await geocodeByAddress(address)
            console.log(res)
            const latlng = await getLatLng(res[0])
            setFormData({
                ...formData,
                latlng
            })
            console.log(latlng)
        } catch (error) {
            console.log(error)
        }
    }

    const renderFunc = ({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
            <input
                {...getInputProps({
                    placeholder: 'Search Places ...',
                    className: 'location-search-input input input-secondary w-full',
                })}
            />
            <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                    const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                        <div
                            {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                            })}
                        >
                            <span>{suggestion.description}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )

    // useEffect(() => {
    //     // console.log(formData)
    // }, [formData])

    return (
        <div className=" w-full h-full flex rounded-md gap-4">
            <div className="flex bg-[#eafdfc] shadow-md w-1/3 h-2/3 p-4 rounded-md">
                <form onSubmit={handleSubmit} className="flex gap-4 flex-col w-full">
                    <div className=" text-2xl font-bold">
                        Edit Clinic Info
                    </div>
                    <div>
                        <label>
                            Name :
                        </label>
                        <input name="name" value={formData.name} onChange={({ target }) => handleChange(target)} type="text" placeholder="Type here" className="input input-bordered input-secondary w-full" />
                    </div>
                    <div>

                        <label>
                            Phone Number :
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full" />
                    </div>

                    <div>
                        <label>
                            Address :
                        </label>
                        <PlacesAutocomplete
                            name="address"
                            value={formData.address}
                            onChange={handleChangeAddress}
                            onSelect={handleSelect}
                        >
                            {renderFunc}
                        </PlacesAutocomplete>
                    </div>

                    <div className="">
                        <label>
                            Logo :
                        </label>
                        <input type="file" className="file-input file-input-bordered file-input-secondary w-full" />
                    </div>
                    <button type="submit" className=" flex justify-center font-semibold hover:cursor-pointer py-3 px-4 w-full rounded-md bg-emerald-300 hover:bg-emerald-400 active:bg-emerald-300 active:scale-95 duration-200 ">
                        <span className=" select-none">
                            Edit
                        </span>
                    </button >
                </form>
            </div>
            <div className=" bg-[#eafdfc] h-full w-2/3 p-4 rounded-md shadow-md">
                Actions List
                <ActionTable />
            </div>
        </div>
    )
}