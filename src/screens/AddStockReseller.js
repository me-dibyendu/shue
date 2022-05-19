import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    Pressable
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import ImagePicker from 'react-native-customized-image-picker'
import CustomAppBar from '../components/CustomAppBar'
import Constants from '../shared/Constants'

const AddStockReseller = (props) => {
    const [openCategory, setOpenCategory] = useState(false);
    const [categoryValue, setCategoryValue] = useState(null);
    const [category, setCategory] = useState([
        { label: 'Round', value: 'r' },
        { label: 'V Shaped', value: 'v' }
    ])
    const [openSize, setOpenSize] = useState(false);
    const [sizeValue, setSizeValue] = useState(null);
    const [size, setSize] = useState([
        { label: '28', value: '28' },
        { label: '30', value: '30' }
    ])
    const [openBrand, setOpenBrand] = useState(false);
    const [brandValue, setBrandValue] = useState(null);
    const [brand, setBrand] = useState([
        { label: 'Nike', value: 'nik' },
        { label: 'Adidus', value: 'adi' }
    ])
    const [openIds, setOpenIds] = useState(false);
    const [idsValue, setIdsValue] = useState([]);
    const [ids, setIds] = useState([
        { label: 'Ids One', value: 'ids1' },
        { label: 'Ids two', value: 'ids2' }
    ])
    const addimages = async () => {
        await ImagePicker.openPicker({}).then(image => {

        }).catch(err => console.log(err))
    }
    const addStock = () => {

    }
    return (
        <View style={{flex: 1, backgroundColor: Constants.colors.white,}}>
            <CustomAppBar navigation={props.navigation} reseller={true} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={styles.label}>SKU</Text>
                    <TextInput placeholder='SKU' style={styles.inputField} placeholderStyle={Constants.colors.primary} />
                    <Text style={styles.label}>Title</Text>
                    <TextInput placeholder='Title' style={styles.inputField} placeholderStyle={Constants.colors.primary} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{flex: 0.48}}>
                            <Text style={styles.label}>MRP</Text>
                            <TextInput placeholder='MRP' style={{ ...styles.inputField, flex: 0.48 }} placeholderStyle={Constants.colors.primary} />
                        </View>
                        <View style={{flex: 0.48}}>
                            <Text style={styles.label}>Selling Price</Text>
                            <TextInput placeholder='Selling Price' style={{ ...styles.inputField, flex: 0.48 }} placeholderStyle={Constants.colors.primary} />
                        </View>
                    </View>
                    <Text style={styles.label}>Qty</Text>
                    <TextInput placeholder='Qty' style={styles.inputField} placeholderStyle={Constants.colors.primary} />
                    <Text style={styles.label}>Category</Text>
                    <DropDownPicker
                        placeholder='Categoty'
                        dropDownDirection="TOP"
                        style={styles.inputDropdown}
                        open={openCategory}
                        value={categoryValue}
                        items={category}
                        setOpen={setOpenCategory}
                        setValue={setCategoryValue}
                        setItems={setCategory}
                    />
                    <Text style={styles.label}>Brand</Text>
                    <DropDownPicker
                        placeholder='Brand'
                        dropDownDirection="TOP"
                        style={styles.inputDropdown}
                        open={openBrand}
                        value={brandValue}
                        items={brand}
                        setOpen={setOpenBrand}
                        setValue={setBrandValue}
                        setItems={setBrand}
                    />
                    <Text style={styles.label}>Size</Text>
                    <DropDownPicker
                        placeholder='Size'
                        dropDownDirection="TOP"
                        style={styles.inputDropdown}
                        open={openSize}
                        value={sizeValue}
                        items={size}
                        setOpen={setOpenSize}
                        setValue={setBrandValue}
                        setItems={setSize}
                    />
                    <Text style={styles.label}>IDs</Text>
                    <DropDownPicker
                        placeholder='Ids'
                        dropDownDirection="TOP"
                        multiple={true}
                        style={styles.inputDropdown}
                        open={openIds}
                        value={idsValue}
                        items={ids}
                        setOpen={setOpenIds}
                        setValue={setIdsValue}
                        setItems={setIds}
                    />
                    <Text style={styles.label}>Short Description</Text>
                    <TextInput placeholder='Short Description' multiline={true} style={{ ...styles.inputField, height: 100, }} placeholderStyle={Constants.colors.primary} />
                    <Text style={styles.label}>Long Description</Text>
                    <TextInput placeholder='Long Description' multiline={true} style={{ ...styles.inputField, height: 100, }} placeholderStyle={Constants.colors.primary} />
                    <Text style={styles.label}>Product Images </Text>
                    <Pressable style={styles.btnImages} onPress={addimages}><Text>Add Product Images</Text></Pressable>
                    <Pressable onPress={addStock} style={styles.button}><Text style={styles.buttonText}>Add Stock</Text></Pressable>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: Constants.padding,
        paddingBottom: 100,
    },
    inputDropdown: {
        borderWidth: 0,
        elevation: 10,
        padding: 8,
        marginBottom: Constants.margin,
    },
    inputField: {
        padding: 11,
        elevation: 10,
        backgroundColor: Constants.colors.white,
        borderRadius: Constants.borderRadius,
        marginBottom: Constants.margin,
    },
    btnImages: {
        borderWidth: 1,
        borderColor: Constants.colors.border,
        padding: 12,
    },
    button: {
        alignSelf: 'center',
        textAlign: 'center',
        width: 220,
        padding: Constants.padding,
        marginTop: Constants.margin,
        backgroundColor: Constants.colors.primary,
        borderRadius: Constants.borderRadius,
    },
    buttonText: {
        fontFamily: Constants.fontFamily.RobotoBold,
        color: Constants.colors.white,
        fontSize: 24,
        alignSelf: 'center',
    },
    label: {
        color: Constants.colors.primary,
        fontFamily: Constants.fontFamily.PoppinsMedium,
        marginBottom: 6,
    }
})
export default AddStockReseller