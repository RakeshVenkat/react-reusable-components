import React, { useState, Fragment } from 'react'
import styled from 'styled-components';

const A = styled.a`
  display: block;
  padding: 10px 5px;
  text-transform: capitalize;
  font-weight: 600;
  text-decoration: none;
  color: black;
`;

const MainMenuA = styled(A)`
    font-size: 17px
`

const SubMenuA = styled(A)`
    font-size: 13px;
    padding-left: 10px;
`


/*

  &:hover {
    border-bottom: 2px solid #41addd;
    border-bottom-left-radius: 3%;
    border-bottom-right-radius: 3%;
  }

*/
const UlWrapper = styled.nav`
  padding: 0;
  margin: 0;
  width: 100%;
  background-color: white;
  overflow: hidden;
`;

const Ul = styled.ul`
  display: flex !important;
  list-style: none;
  margin: 0;
  width: 100%;
  padding: 0 1em;
  padding-inline-start: 0;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;
`;

const ItemWrapper = styled.li`
  width: 100%;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  font-size: 17px;

  &:first-child {
    border-top: none;
  }
`;

//const SubMenuItem = styled(Item);
const SubMenu = styled(ItemWrapper)`
    display: block;
    width: 20%;
`
const SubMenu1 = styled(SubMenu)`
  height: 500px;
`

const SubMenuWrapper = styled(UlWrapper)`
  min-height: 500px;
  border-top: 2px solid #dfdfdf;
  flex-direction: row;
`;

const SubMenuUl = styled(Ul)`
    display: flex;
    flex-direction: row;
`

const Level2Ul = styled(Ul)`
  min-height: 500px;
  flex-direction: column;
`

const SubMenuLabel = styled.li`
  padding: 10px;
  text-transform: capitalize;
  font-size: 15px;
  font-weight: bold;
  color: gray;
`

const tree = {
    "essentials": [
        {
            "essentials by category": [
                { "heaters": [] },
                { "electric blankets": [] },
                { "baby bathing and changing": [{ "bathing": [] }, { "changing": [] }, { "toilet training": [] }, { "toileteries": [] }] },
                { "security and accessories": [] }
            ]
        }
    ],
    "home & living": [{
        "by category": [
            { "online only": [] },
            { "bedding": [] }
        ],
        "by room": [
            { "bathroom": [] },
            { "bedroom": [] }
        ],
        "features": [
            { "inspired living": [] },
            { "Build your space": [] }
        ]
    }],
    "electronics": [{
        "by category": [
            { "latest arrivals": [] }
        ],
        "buying guides": [
            { "Connected home": [] }
        ]
    }],
    "toys": [{
        "by age": [{ "0 - 2 yrs": [] }, { "2 - 4 yrs": [] }, { "4 - 8 yrs": [] }, { "8yrs & above": [] }],
        "by price": [{ "Under $10": [] }, { "$10 - $20": [] }, { "$20 - $40": [] }, { "$40 & above": [] }],
        "by category": [{ "toys": [] }, { "action figures": [] }, { "scooters and skateboards": [] }, { "play and activity": [] }],
        "by brands": [{ "Barbie": [] }, { "disney": [] }, { "frozen": [] }],
        "features": [{ "latest arrivals": [] }, { "Lego masters": [] }],
    }],
    "women": [
        { "womens clothing": [{ "tops": [] }, { "dresses": [] }, { "skirts": [] }, { "jeans": [] }, { "shorts": [] }, { "underwear": [] }, { "sleepwear": [] }] },
        { "womens shoes": [{ "sandals": [] }, { "flats": [] }, { "sneakers": [] }, { "slippers": [] }, { "heels": [] }] },
        { "womens accessories": [{ "hats": [] }, { "belts": [] }, { "umbrella": [] }, { "jewellery": [] }, { "watches": [] }] },
        { "womens beauty": [{ "skin care": [] }, { "fragrances": [] }, { "gift sets": [] }, { "toiletries": [] }, { "cosmetics": [] }] },
        { "womens features": [{ "latest arrivals": [] }, { "bras buying guide": [] }, { "denim fit guide": [] }] },
    ],
    "men": [
        {
            "mens clothing": [
                { "mens tops": [{ "mens t shirts": [] }, { "mens shirts": [] }] },
                { "mens shorts": [{ "mens boardshorts": [] }, { "mens casual shorts": [] }] }
            ]
        },
        {
            "mens shoes": [
                { "mens casual shoes": [] },
                { "mens sandals and thongs": [] },
                { "mens boots": [] },
                { "mens slippers": [] },
                { "mens sneakers": [] },
            ]
        },
        {
            "mens accessories": [
                { "sunglasses": [] },
                { "mens belts": [] },
                { "mens hats": [{ "mens beanies": [] }] },
                { "mens watches": [] }
            ]
        },
        {
            "mens grooming": [
                { "healthcare": [{ "snacks and supplements": [] }, { "first aid": [] }, { "hot and cold therapies": [] }, { "footcare": [] }] },
                { "mens toilteries": [] },
                { "shaving": [] },
                { "gift sets": [] }
            ]
        },
        {
            "features": [
                { "better cotton initiatives": [] },
                { "price drops men": [] }
            ]
        }
    ]
}

const stripWhiteSpaceAndConcat = (path) => {
    return path.split(' ').join('').trim().concat('/')
}

const getSubMenuItems = (event) => {
    event.preventDefault()
    event.target.id
}

const getSubMenu = (setSubMenuItems, event) => {
    event.preventDefault()
    const subMenuList = []
    const selectedMenuItem = event.target.id
    tree[selectedMenuItem].forEach(eachSubMenuLevel2 => {
        for (const eachSubMenuItemLabel in eachSubMenuLevel2) {
            if (eachSubMenuLevel2.hasOwnProperty(eachSubMenuItemLabel)) {
                const eachSubMenuLevel2Items = eachSubMenuLevel2[eachSubMenuItemLabel];
                let level2ItemsList = eachSubMenuLevel2Items.map(item => {
                    const subMenuItem = Object.keys(item)[0]
                    let path = stripWhiteSpaceAndConcat(subMenuItem)
                    return <li><SubMenuA href={path}>{subMenuItem}</SubMenuA></li>
                })
                subMenuList.push(
                    <SubMenu>
                        <SubMenuLabel>{eachSubMenuItemLabel}</SubMenuLabel>
                        <li>
                            <UlWrapper>
                                <Level2Ul>
                                    {level2ItemsList}
                                </Level2Ul>
                            </UlWrapper>
                        </li>
                    </SubMenu>
                )
            }
        }
        /*
                    {eachSubMenuLevel2Items.map(eachSubMenuLevel2Item => {
                    return (<li><a>{eachSubMenuLevel2Item}</a></li>)
                })}
        */
        /* Object.keys(eachSubMenu).forEach(element => {
             subMenuList.push(
                 <SubMenu>
                     <A id={selectedMenuItem} onClick={(e) => getSubMenuItems(setSubMenuItems, e)}>{element}</A>
                 </SubMenu>
             )
         })*/
    })
    {
        subMenuList.length > 0 ?
            setSubMenuItems(
                <SubMenuWrapper>
                    <SubMenuUl>
                        {subMenuList}
                    </SubMenuUl>
                </SubMenuWrapper>
            ) :
            setSubMenuItems(null)
    }
}

const fetchNavBarItems = (setSubMenuItems) => {
    const ItemsList = []
    for (const key in tree) {
        if (tree.hasOwnProperty(key)) {
            let path = stripWhiteSpaceAndConcat(key)
            ItemsList.push(
                <ItemWrapper>
                    <MainMenuA id={key} href={path} onClick={(e) => getSubMenu(setSubMenuItems, e)}>{key}</MainMenuA>
                </ItemWrapper>)
        }
    }
    return ItemsList
}

const CustomHeader = () => {
    let [subMenuItems, setSubMenuItems] = useState(null)
    return (
        <React.Fragment>
            <UlWrapper>
                <Ul>
                    {fetchNavBarItems(setSubMenuItems)}
                </Ul>
            </UlWrapper>
            {subMenuItems}
        </React.Fragment>)
}

export default CustomHeader;