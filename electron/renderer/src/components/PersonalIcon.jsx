/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

import './PersonalIcon.css';
import PropTypes from 'prop-types';
import React from 'react';
import {colorFromId} from '../lib/accentColor';

const PersonalIcon = ({account, accentID, onClick}) => (
  <div
    className="PersonalIcon"
    title={account.name}
    onClick={onClick}
    data-uie-name="item-team"
    data-uie-value={account.name}
  >
    {account.visible && <div className="PersonalIcon-border" style={{borderColor: colorFromId(accentID)}} />}
    <div className="PersonalIcon-inner">{account.picture && <img src={account.picture} />}</div>
  </div>
);

PersonalIcon.propTypes = {
  accentID: PropTypes.number,
  account: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export {PersonalIcon};
