# ubuntu OS running Apache2
FROM ubuntu/apache2:edge

# Delete default index.html file
RUN rm -rf /var/www/html/index.html

# Copy all the app files to directory where apache serves the website
COPY . /var/www/html/

# Change the group owner of the apache website server directory. Change it to the apache user
RUN chown -R root:www-data /var/www/html

# Change the access permissions for the directory so that 'other' only has read permissions
RUN chmod -R o-x /var/www/html

# Remove write permission for apache user
RUN chmod -R g-w /var/www/html
