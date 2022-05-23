## ASAP - Academic Staff Appointment Process

### System users

All passwords: `4tOmH3aRTm0Th3r`

* django admin user: `asapadmin`
* Chair
  * `nir_keidar`
* Admin
  * `nitzan_eilon`
  * `aviram_dayan`
* Department 1
  * `rani_blair` - dept-head
  * `yael_shenkar` - member
  * `shemuel_elbaz` - member
* Department 2
  * `sharon_hadad` - dept-head
  * `gila_benisti` - member
  * `reut_magidish` - member

### DB
#### Dump data
```
python .\manage.py dumpdata auth.group auth.user core.version core.profile core.application core.applicationstep core.rank core.department --indent 4 --format json -o core\fixtures\core.json
python .\manage.py dumpdata auth.user core.version core.profile core.application core.applicationstep core.rank core.department --indent 4 --format json -o core\fixtures\core.json

### Setup env
* Client
  * Run `npm install` from `code/client/asap`
* Server
  * Install 3rd parties: `pip install -r requirements.txt`
  * Run DB script from `build/db`
  * Run migration: `python manage.py migrate`
  * Populate DB: `python manage.py loaddata core.xml`
  * Copy `build/.env/.env.dev` to `code/server/src/asap` and rename it to `.env`
