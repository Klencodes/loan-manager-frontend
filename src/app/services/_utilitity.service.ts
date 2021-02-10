import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  /**
   * Generate paginations data
   * @param url pagination url
   * @param totalCount total record count
   * @param currentPageCount current page record count
   */
  getPaginations(url: string, totalCount: number, currentPageCount: number) {
    let numberOfPages = totalCount / 10;
    if (numberOfPages < 1) { return []; }
    if ((totalCount % 10)  > 0) {
      numberOfPages += 1;
    }
    const pageUrlParts = url.split('=');
    const pageUrl = pageUrlParts[0];
    const paginations = [];
    for (let index = 1; index <= numberOfPages; index++) {
      paginations.push({
        page_number: index,
        url: pageUrl + '=' + index.toString()
      });
    }
    return paginations;
  }
   /**
   * Convert text to lower case
   * @param text text
   */
  toLowerCase(text: string) {
    if (!isNullOrUndefined(text)) {
      return text.toLowerCase();
    }
    return '';
  }
   /**
   * Convert text to lower case
   * @param text text
   */
  reverseString(text: string) {
    if (!isNullOrUndefined(text)) {
      return text.split('').reverse().join('');
    }
    return '';
  }
  /**
   * Remove first zero in a phone number
   * @param phoneNumber phone number
   */
  removeFirstZero(phoneNumber: string) {
    let phone = phoneNumber;
    if (phoneNumber.length > 0) {
      if (phoneNumber.startsWith('0', 0)) {
        phone = phoneNumber.substring(1);
      }
    }
    return phone;
  }
  /**
   * Get regions/states of Nigeria
   */
  get getNigeriaStates() {
    return [
      'Abia',
      'Adamawa',
      'Anambra',
      'Akwa Ibom',
      'Bauchi',
      'Bayelsa',
      'Benue',
      'Borno',
      'Cross River',
      'Delta',
      'Ebonyi',
      'Enugu',
      'Edo',
      'Ekiti',
      'FCT - Abuja',
      'Gombe',
      'Imo',
      'Jigawa',
      'Kaduna',
      'Kano',
      'Katsina',
      'Kebbi',
      'Kogi',
      'Kwara',
      'Lagos',
      'Nasarawa',
      'Niger',
      'Ogun',
      'Ondo',
      'Osun',
      'Oyo',
      'Plateau',
      'Rivers',
      'Sokoto',
      'Taraba',
      'Yobe',
      'Zamfara'
    ];
  }
  /**
   * Get regions of Ghana
   */
  get getGhanaRegions() {
    return [
      'Ahafo Region',
      'Ashanti Region',
      'Bono East Region',
      'Brong Ahafo Region',
      'Central Region',
      'Eastern Region',
      'Greater Accra Region',
      'North East Region',
      'Northern Region',
      'Oti Region',
      'Savannah Region',
      'Upper East',
      'Upper West Region',
      'Volta Region',
      'Western North Region',
      'Western Region'
    ];
  }
}
