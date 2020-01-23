import React, { Component } from 'react'
import { Text, View, I18nManager } from 'react-native'
import moment from 'moment';
import i18n from 'i18n-js';

import TableHeader from '../../components/TableHeader';
import Divider from '../../components/Divider';
import Table from '../../components/Table';

import { getMonthName } from '../../helpers/functions';
import { SUN, MON, TUE, WED, THU, FRI, SAT } from '../../languages';
import HomeUI from './HomeUI';


export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return(<HomeUI />);
    }
}