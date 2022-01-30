import Login from '../../components/auth/Login';
import AsapAdminApplications from '../../components/asap-admin/Applications';
import AsapAdminApplication from '../../components/asap-admin/Application';
import AsapDeptHeadApplications from '../../components/asap-dept-head/Applications';
import AsapDeptHeadApplication from '../../components/asap-dept-head/Application';
import AsapApptChairAppointments from '../../components/asap-appt-chair/Appointments';
import { ROLES } from '../../constants';

const ROUTE_LOGIN = 'login';
const ASAP_ADMIN_APPLICATIONS = 'applications';
const ASAP_ADMIN_APPLICATION = 'application';
export const ASAP_DEPT_HEAD_APPLICATIONS = 'applications';
export const ASAP_DEPT_HEAD_APPLICATION = 'application';
const ASAP_APPT_CHAIR_APPOINTMENTS = 'appointments';

export const LOGIN_ROUTE = {
    id: ROUTE_LOGIN,
    path: `/${ROUTE_LOGIN}`,
    Component: Login,
    isProtected: false,
    roles: [],
};

export const ROUTES = [
    LOGIN_ROUTE,
    {
        id: ASAP_ADMIN_APPLICATIONS,
        path: `/${ASAP_ADMIN_APPLICATIONS}`,
        Component: AsapAdminApplications,
        isProtected: true,
        roles: [ROLES.ASAP_ADMIN],
        i18nKey: 'routes.asap-admin-appointments',
    },
    {
        id: ASAP_ADMIN_APPLICATION,
        path: `/${ASAP_ADMIN_APPLICATION}/:id`,
        Component: AsapAdminApplication,
        isProtected: true,
        roles: [ROLES.ASAP_ADMIN],
        i18nKey: 'routes.asap-admin-edit-request',
    },
    {
        id: ASAP_APPT_CHAIR_APPOINTMENTS,
        path: `/${ASAP_APPT_CHAIR_APPOINTMENTS}`,
        Component: AsapApptChairAppointments,
        isProtected: true,
        roles: [ROLES.ASAP_APPT_CHAIR],
        i18nKey: 'routes.asap-appt-chair-appointments',
    },
    {
        id: ASAP_DEPT_HEAD_APPLICATIONS,
        path: `/${ASAP_DEPT_HEAD_APPLICATIONS}`,
        Component: AsapDeptHeadApplications,
        isProtected: true,
        roles: [ROLES.ASAP_DEPT_HEAD],
        i18nKey: 'routes.asap-dept-head-appointments',
    },
    {
        id: ASAP_DEPT_HEAD_APPLICATION,
        path: `/${ASAP_DEPT_HEAD_APPLICATION}/:id`,
        Component: AsapDeptHeadApplication,
        isProtected: true,
        roles: [ROLES.ASAP_DEPT_HEAD],
        i18nKey: 'routes.asap-dept-head-appointment',
    },
];
